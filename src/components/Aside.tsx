import Link from "next/link";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";

import { BiCalendar, BiBarChartAlt } from "react-icons/bi";

const polorName = ["ほくと", "らら"];

type DialogProps = {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
};

export const MUIDialog = ({ open, selectedValue, onClose }: DialogProps) => {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>名前を選択してください</DialogTitle>
      <List sx={{ pt: 0 }}>
        {polorName.map((name, i) => (
          <ListItem disableGutters key={i}>
            <ListItemButton onClick={() => handleListItemClick(name)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

const Aside = () => {
  return (
    <div className=" bg-white w-[80px]  h-full fixed flex flex-col  text-grey items-center z-10">
      <div className="mt-[100px] flex flex-col gap-10">
        <div className="cursor-pointer  bg-blue-600 w-[32px] h-[32px] rounded-lg">
          <Link href="/">
            <BiCalendar className="w-full h-full text-white p-1" />
          </Link>
        </div>
        <div className="cursor-pointer w-[32px] h-[32px]  rounded-lg">
          <Link href="/graph">
            <BiBarChartAlt className="w-full h-full  text-[#969CAE] p-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Aside;