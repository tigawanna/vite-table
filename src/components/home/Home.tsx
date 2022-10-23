import React from "react";
import { IconContext } from "react-icons";
import {
  FaRegEdit,
  FaPlus,
  FaTimes,
  FaPrint,
} from "react-icons/fa";
import useMeasure from "react-use-measure";
import { TheTable } from "../../table";
import DATA from "./MOCK_DATA.json";
import { header } from "./utils";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const [update, setUpdate] =React.useState(false);
  const [open, setOpen] = React.useState(false);
  
  const [ref, top] = useMeasure();
  const [mainH, setMainH] = React.useState(window?.innerHeight ?? 0);
  const totalHeight = mainH - top.height - 90;
  const bottomHeight = totalHeight;


  return (
    <div className="w-full  h-full">
      <div className="text-3xl font-bold flex justify-evenly items-center sticky top-[10px] z-40 ">
        table
        <div className="h-full w-fit bg-slate-600 p-2  flex-center rounded-xl">
          <IconContext.Provider
            value={{
              size: "25px",
              className:
                "mx-[15px] text-white hover:text-purple-600",
            }}
          >
            <FaRegEdit
              onClick={() => setUpdate(!update)}
            />
            {!open ? (
              <FaPlus
                onClick={() => setOpen(!open)}
              />
            ) : (
              <FaTimes
                onClick={() => setOpen(!open)}
              />
            )}
          </IconContext.Provider>
        </div>
      </div>
          <div
              style={{
                  // top: `${ratio}%`,
                  height: bottomHeight,
                  bottom: 0,
              }}
              className="absolute  w-[98%]  overflow-y-scroll  left-[1%] right-[1%] 
         scrollbar-thin scrollbar-thumb-purple-800 "
          >
      <TheTable
        header={header}
        rows={DATA}
        update={update}
      />
          </div>      
    </div>
  );
};
