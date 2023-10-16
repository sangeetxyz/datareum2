import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { PatientBC, PatientDB, userData } from "@/types/types";
import { checker, signer, storage } from "@/firebase/firebase";
import axios from "axios";
import {
  countObjectsWithNonInitialToken,
  getAllUsersData,
  isEmailValid,
  isPhoneNumber,
  isPhoneNumberPresent,
  uploadUserFull,
} from "./helpers";
import { toast } from "react-toastify";
import { ethers } from "ethers";
import { abi } from "../ethereum/abi";
import { contract } from "../ethereum/contract";
import { z } from "zod";
import { Dispatch, SetStateAction } from "react";

export const handleProfilePhotoUpload = async (
  photo: File | undefined,
  userData: userData,
  isProUploaded: boolean,
) => {
  if (photo != undefined && !isProUploaded) {
    const name = uuidv4();
    const photoRef = ref(storage, `pros/${name + "//" + photo?.name}`);
    await uploadBytes(photoRef, photo!);
    const url = await getDownloadURL(photoRef);
    const newUserData: userData = {
      name: userData.name,
      org: userData.org,
      email: userData.email,
      phone: userData.phone,
      isOrgVerified: userData.isOrgVerified,
      isEmailVerified: userData.isEmailVerified,
      isPhoneVerified: userData.isPhoneVerified,
      canContribute: userData.canContribute,
      canDownload: userData.canDownload,
      token: userData.token,
      proUrl: url,
      isGod: userData.isGod,
      fireUid: userData.fireUid,
      isTac: userData.isTac,
    };
    await axios
      .put(`${process.env.NEXT_PUBLIC_WEB_URL}api/dev/users`, newUserData, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
        },
      })
      .then(() => {
        console.log("updated");
      });
  } else {
    console.log("undefinedd photo");
  }
};

export const handleProfileUpdateOnDash = async (
  name: string,
  org: string,
  email: string,
  userData: userData,
) => {
  const newUserData: userData = {
    name: name,
    org: org,
    email: email,
    phone: userData.phone,
    isOrgVerified: userData.isOrgVerified,
    isEmailVerified: userData.isEmailVerified,
    isPhoneVerified: userData.isPhoneVerified,
    canContribute: userData.canContribute,
    canDownload: userData.canDownload,
    token: userData.token,
    isGod: userData.isGod,
    proUrl: userData.proUrl,
    fireUid: userData.fireUid,
    isTac: userData.isTac,
  };
  console.log(newUserData);
  await axios
    .put(`${process.env.NEXT_PUBLIC_WEB_URL}api/dev/users`, newUserData, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
      },
    })
    .then(() => {
      console.log("updated");
    });
};

export const handleGetOtpClickedForSignup = async (
  name: string,
  email: string,
  org: string,
  phoneNumber: string,
  isTacAccepted: boolean,
  allUserData: object | null,
) => {
  const emailSchema = z.string().email();
  if (name.length > 1) {
    if (isEmailValid(email) && emailSchema.parse(email)) {
      if (org.length > 1) {
        if (isPhoneNumber(phoneNumber)) {
          if (isTacAccepted) {
            if (isPhoneNumberPresent(allUserData, phoneNumber)) {
              toast.error("You already have an account!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                pauseOnFocusLoss: false,
                theme: "dark",
              });
              console.log("already have an accout");
              return false;
            } else {
              return await signer("+91" + phoneNumber).then(async (value) => {
                if (value === true) {
                  toast.success("OTP sent succesfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    pauseOnFocusLoss: false,
                    theme: "dark",
                  });
                  console.log("sms sent");
                  return true;
                } else {
                  toast.error("Something went wrong!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    pauseOnFocusLoss: false,
                    theme: "dark",
                  });
                  console.log("sms not sent");
                  return false;
                }
              });
            }
          } else {
            toast.error("Accept Policy Terms!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              pauseOnFocusLoss: false,
              theme: "dark",
            });
            console.log("accept t and c");
            return false;
          }
        } else {
          toast.error("Enter a valid phone number!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            pauseOnFocusLoss: false,
            theme: "dark",
          });
          console.log("Enter a valid phone number!");
          return false;
        }
      } else {
        toast.error("Enter a valid Organzation name!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          pauseOnFocusLoss: false,
          theme: "dark",
        });
        console.log("entrt org");
        return false;
      }
    } else {
      toast.error("Enter a valid email!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false,
        theme: "dark",
      });
      console.log("enter valid email");
      return false;
    }
  } else {
    toast.error("Enter a valid name!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      pauseOnFocusLoss: false,
      theme: "dark",
    });
    console.log("enter name");
    return false;
  }
};

export const handleProceedClickedForSignup = (
  OTP: string,
  name: string,
  org: string,
  email: string,
  phoneNumber: string,
  isContributing: boolean,
  isTacAccepted: boolean,
) => {
  console.log(name);
  if (OTP.length === 6) {
    checker(OTP).then(async (value) => {
      if (value === true) {
        uploadUserFull(
          name,
          org,
          email,
          phoneNumber,
          isContributing,
          isTacAccepted,
        );
        toast.info("Welcome!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          pauseOnFocusLoss: false,
          theme: "dark",
        });
        console.log("go to page");
      } else {
        toast.error("Wrong OTP", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          pauseOnFocusLoss: false,
          theme: "dark",
        });
        console.log("wrong otp");
      }
    });
  } else {
    toast.error("Enter a valid OTP!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      pauseOnFocusLoss: false,
      theme: "dark",
    });
    console.log("enter otp");
  }
};

export const handleGetOtpClickedForSignin = async (
  phoneNumber: string,
  allUserData: object | null,
) => {
  if (isPhoneNumber(phoneNumber)) {
    if (isPhoneNumberPresent(allUserData, phoneNumber)) {
      return await signer("+91" + phoneNumber).then(async (value) => {
        if (value === true) {
          toast.success("OTP sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            pauseOnFocusLoss: false,
            theme: "dark",
          });
          return true;
        } else {
          toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            pauseOnFocusLoss: false,
            theme: "dark",
          });
          return false;
        }
      });
    } else {
      toast.error("You don't have an account!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false,
        theme: "dark",
      });
      return false;
    }
  } else {
    toast.error("Enter a valid phone number!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return false;
  }
};

export const handleProceedClickedForSignin = (OTP: string) => {
  if (OTP.length === 6) {
    checker(OTP).then(async (value) => {
      if (value === true) {
        toast.success("welcome!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          pauseOnFocusLoss: false,
          theme: "dark",
        });
      } else {
        toast.error("Wrong OTP!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          pauseOnFocusLoss: false,
          theme: "dark",
        });
      }
    });
  } else {
    toast.error("Enter a valid OTP!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      pauseOnFocusLoss: false,
      theme: "dark",
    });
  }
};

export const handleGetVerifiedClicked = async (
  userData: userData,
  refresher: () => {},
) => {
  if (
    userData.canDownload === false ||
    userData.isEmailVerified === false ||
    userData.isOrgVerified === false ||
    userData.isPhoneVerified === false
  ) {
    const newUserData: userData = {
      name: userData.name,
      org: userData.org,
      email: userData.email,
      phone: userData.phone,
      isOrgVerified: true,
      isEmailVerified: true,
      isPhoneVerified: true,
      canContribute: true,
      canDownload: true,
      token: userData.token,
      isGod: userData.isGod,
      proUrl: userData.proUrl,
      fireUid: userData.fireUid,
      isTac: userData.isTac,
    };
    await axios
      .put(`${process.env.NEXT_PUBLIC_WEB_URL}api/dev/users`, newUserData, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
        },
      })
      .then(() => {
        refresher();
        toast.success("God Mode activated!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          pauseOnFocusLoss: false,
          theme: "dark",
        });
      });
  } else {
    toast.error("God Mode is already active!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      pauseOnFocusLoss: false,
      theme: "dark",
    });
  }
};

export const handleUserUpdateOnAdmin = async (
  isGod: boolean,
  canContribute: boolean,
  canDownload: boolean,
  isOrgVerified: boolean,
  isEmailVerified: boolean,
  isPhoneVerified: boolean,
  userData: userData,
) => {
  let token: string | undefined = userData.token;
  if (canDownload === false) {
    token = "initial";
  }
  const newUserData: userData = {
    name: userData.name,
    org: userData.org,
    email: userData.email,
    phone: userData.phone,
    isOrgVerified: isOrgVerified,
    isEmailVerified: isEmailVerified,
    isPhoneVerified: isPhoneVerified,
    canContribute: canContribute,
    canDownload: canDownload,
    token: token,
    isGod: isGod,
    proUrl: userData.proUrl,
    fireUid: userData.fireUid,
    isTac: userData.isTac,
  };
  console.log(newUserData);
  const res = await axios
    .put(`${process.env.NEXT_PUBLIC_WEB_URL}api/dev/users`, newUserData, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
      },
    })
    .then(() => {
      toast.success("Information updated!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false,
        theme: "dark",
      });
    });
};

export const handlePatientUploadToDb = async (data: PatientDB[]) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_WEB_URL}api/dev/patients`,
    {
      data,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
      },
    },
  );
  console.log(res);
};

export const getPatientsDataFromDb = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_WEB_URL}api/dev/patients`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
      },
    },
  );
  return data;
};

// export const handlePatientUploadToBc = async (data: PatientBC[]) => {
//   const status = await contract.status();
//   console.log(status);
//   for (const obj of data) {
//     console.log("doing");
//     await contract.addData(obj.identifier, obj.secretKey);
//   }
//   console.log("done");
// };

export const handlePatientUploadToBc = async (
  data: PatientBC[],
): Promise<boolean> => {
  try {
    const status = await contract.status();
    console.log(status);
    const identifiers = data.map((obj) => obj.identifier);
    const secretKeys = data.map((obj) => obj.secretKey);
    await contract.addDataBatch(identifiers, secretKeys);
    return true;
  } catch (error: any) {
    console.log(error.message);
    return false;
  }
};

export const getPatientsDataFromBc = async () => {
  const result = await contract.getAllData();
  const [identifiers, secretKeys] = result;

  const data = [];
  for (let i = 0; i < identifiers.length; i++) {
    data.push({
      identifier: identifiers[i],
      secretKey: secretKeys[i],
    });
  }

  return data;
};

export const handleDeleteDbAll = async (
  event: any,
  next: Dispatch<SetStateAction<boolean>>,
  refresher: () => {},
) => {
  event.stopPropagation();
  const awaiter = async () => {
    await axios.delete(`${process.env.NEXT_PUBLIC_WEB_URL}api/dev/patients`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
      },
    });
    refresher();
  };
  next(false);
  toast.promise(
    awaiter,
    {
      pending: "Deleting...",
      success: "Deleted everything!",
      error: "Rejected 🤯",
    },
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      pauseOnFocusLoss: false,
      theme: "dark",
    },
  );
};

export const handleDeleteBcAll = async (
  event: any,
  next: Dispatch<SetStateAction<boolean>>,
  refresher: () => {},
) => {
  event.stopPropagation();
  const awaiter = async () => {
    await contract.deleteAllData();
    setTimeout(refresher, 5000);
    setTimeout(refresher, 10000);
    setTimeout(refresher, 15000);

  };
  next(false);
  toast.promise(
    awaiter,
    {
      pending: "Deleting...",
      success: "Deleted everything!",
      error: "Rejected 🤯",
    },
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      pauseOnFocusLoss: false,
      theme: "dark",
    },
  );

  next(false);
};

export const getAdminStats = async () => {
  let stats = {
    dbRows: 0,
    bcRows: 0,
    totalUsers: 0,
    apiUsers: 0,
  };
  const allUserData = await getAllUsersData();
  const allPatientDataFromDb = await getPatientsDataFromDb();
  stats.totalUsers = allUserData.length;
  stats.dbRows = allPatientDataFromDb.length;
  const contractRowsCount: BigInt = await contract.getDataLength();
  stats.bcRows = parseInt(contractRowsCount.toString());
  if (allUserData.length > 0) {
    stats.apiUsers = countObjectsWithNonInitialToken(allUserData);
  }
  console.log(stats);
  return stats;
};
