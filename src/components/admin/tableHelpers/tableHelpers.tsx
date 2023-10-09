import { userData } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ArrowUpDown } from "lucide-react";
import { BiSolidBusiness } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { Switch } from "@/components/ui/switch";
import { handleUserUpdateOnAdmin } from "../../../utils/helper/handlers";
import { getAllUsersData } from "../../../utils/helper/helpers";
import { useAtom } from "jotai";
import { allUserData } from "@/jotai/atom";

export const columns: ColumnDef<userData>[] = [
  {
    accessorKey: "org",
    header: ({ column }) => {
      return (
        <>
          <div
            className="flex items-center justify-start"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <div>Organization</div>
            <div>
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
          </div>
        </>
      );
    },
    cell: function Cell({ row }) {
      const userData = row.original;
      return <div className="">{userData.org}</div>;
    },
  },
  {
    accessorKey: "phone",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center justify-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div>Phone</div>
          <div>
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </div>
        </div>
      );
    },
    cell: ({ row }) => {
      const userData = row.original;
      return (
        <div className="flex justify-center">
          <div>{userData.phone}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "isGod",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center justify-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="text-center">Role</div>
          <div>
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </div>
        </div>
      );
    },
    cell: function Cell({ row }) {
      const userData = row.original;
      return userData.isGod ? (
        <div className="text-center">ADMIN</div>
      ) : (
        <div className="text-center">USER</div>
      );
    },
  },
  {
    accessorKey: "canContribute",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center justify-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="whitespace-nowrap">Contribution</div>
          <div className="shrink-0">
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </div>
        </div>
      );
    },
    cell: ({ row }) => {
      const userData = row.original;
      return userData.canContribute ? (
        <div className="text-center">ALLOWED</div>
      ) : (
        <div className="text-center">DENIED</div>
      );
    },
  },
  {
    accessorKey: "canDownload",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center justify-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="whitespace-nowrap">API Access</div>
          <div className="shrink-0">
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </div>
        </div>
      );
    },
    cell: function Cell({ row }) {
      const userData = row.original;
      return userData.canDownload ? (
        <div className="text-center">ALLOWED</div>
      ) : (
        <div className="text-center">DENIED</div>
      );
    },
  },
  {
    accessorKey: "b",
    header: ({ column }) => {
      return (
        <div
          className="flex justify-center"
          // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Verification
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </div>
      );
    },
    cell: function Cell({ row }) {
      const userData = row.original;
      return (
        <div className="flex justify-center space-x-1">
          <div>
            {userData.isPhoneVerified ? (
              <AiFillPhone size={20} color={"#1ED760"} />
            ) : (
              <AiFillPhone size={20} color={"orange"} />
            )}
          </div>
          <div>
            {userData.isEmailVerified ? (
              <MdEmail size={20} color={"#1ED760"} />
            ) : (
              <MdEmail size={20} color={"orange"} />
            )}
          </div>
          {!!userData.org && (
            <div>
              {userData.isOrgVerified ? (
                <BiSolidBusiness size={20} color={"#1ED760"} />
              ) : (
                <BiSolidBusiness size={20} color={"orange"} />
              )}
            </div>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "a",
    header: () => <div className="text-right">Controls</div>,
    cell: function Cell({ row }) {
      const userData = row.original;
      const [isGod, setIsGod] = useState<boolean>(userData.isGod);
      const [canContribute, setCanContribute] = useState<boolean>(
        userData.canContribute,
      );
      const [canDownload, setCanDownload] = useState<boolean>(
        userData.canDownload,
      );
      const [isEmailVerified, setIsEmailVerified] = useState<boolean>(
        userData.isEmailVerified,
      );
      const [isOrgVerified, setIsOrgVerified] = useState<boolean>(
        userData.isOrgVerified,
      );
      const [isPhoneVerified, setIsPhoneVerified] = useState<boolean>(
        userData.isPhoneVerified,
      );
      const [allUsersData, setAllUsersData] = useAtom(allUserData);

      return (
        <div className="flex justify-end">
          {/* <Dialog open={isDialogOpened}>
            <DialogTrigger className="-my-4">
              <GiSettingsKnobs size={28} />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-3xl">User Controls</DialogTitle>
                <DialogDescription className="text-zinc-300">
                  Toggle permissons and verifications!
                </DialogDescription>
              </DialogHeader>

              <div className="flex w-full justify-between">
                <div className="text-zinc-50">isGod</div>
                <Switch />
              </div>
              <div className="flex w-full justify-between">
                <div className="text-zinc-50">canContribute</div>
                <Switch />
              </div>
              <div className="flex w-full justify-between">
                <div className="text-zinc-50">canDownload</div>
                <Switch />
              </div>
              <div className="flex w-full justify-between">
                <div className="text-zinc-50">isEmailVerified</div>
                <Switch />
              </div>
              <div className="flex w-full justify-between">
                <div className="text-zinc-50">isOrgVerified</div>
                <Switch />
              </div>
              <div className="flex w-full justify-between">
                <div className="text-zinc-50">isPhoneVerified</div>
                <Switch />
              </div>
              <ThemeButton
                title="Update Changes"
                onClick={() => {
                  setIsDialogOpened(undefined);
                }}
              />
            </DialogContent>
          </Dialog> */}
          <AlertDialog>
            <AlertDialogTrigger className="-my-4">
              <GiSettingsKnobs size={28} />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-3xl text-stone-100">
                  User Controls
                </AlertDialogTitle>
                <AlertDialogDescription className="text-stone-300">
                  Toggle permissons and verifications!
                </AlertDialogDescription>
                <div className="flex flex-col space-y-4 pt-2">
                  <div className="flex w-full justify-between">
                    <div className="text-zinc-50">isGod</div>
                    <Switch
                      checked={isGod}
                      onCheckedChange={(value) => {
                        setIsGod(value);
                      }}
                    />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="text-zinc-50">canContribute</div>
                    <Switch
                      checked={canContribute}
                      onCheckedChange={(value) => {
                        setCanContribute(value);
                      }}
                    />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="text-zinc-50">canDownload</div>
                    {/* TODO: delete token if download revoked */}
                    <Switch
                      checked={canDownload}
                      onCheckedChange={(value) => {
                        setCanDownload(value);
                      }}
                    />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="text-zinc-50">isEmailVerified</div>
                    <Switch
                      checked={isEmailVerified}
                      onCheckedChange={(value) => {
                        setIsEmailVerified(value);
                      }}
                    />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="text-zinc-50">isOrgVerified</div>
                    <Switch
                      checked={isOrgVerified}
                      onCheckedChange={(value) => {
                        setIsOrgVerified(value);
                      }}
                    />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="text-zinc-50">isPhoneVerified</div>
                    <Switch
                      checked={isPhoneVerified}
                      onCheckedChange={(value) => {
                        setIsPhoneVerified(value);
                      }}
                    />
                  </div>
                </div>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel
                  className="bg-stone-900"
                  onClick={() => {
                    setIsGod(userData.isGod);
                    setCanContribute(userData.canContribute);
                    setCanDownload(userData.canDownload);
                    setIsEmailVerified(userData.isEmailVerified);
                    setIsOrgVerified(userData.isOrgVerified);
                    setIsPhoneVerified(userData.isPhoneVerified);
                  }}
                >
                  CANCEL
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={async () => {
                    await handleUserUpdateOnAdmin(
                      isGod,
                      canContribute,
                      canDownload,
                      isEmailVerified,
                      isOrgVerified,
                      isPhoneVerified,
                      userData,
                    );
                    // window.location.reload();
                    const data = await getAllUsersData();
                    setAllUsersData(data);
                  }}
                  className="cursor-pointer rounded-lg bg-acc px-3 py-2 text-center text-sm font-bold uppercase text-stone-950 hover:opacity-90 xl:mt-0"
                >
                  update
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
