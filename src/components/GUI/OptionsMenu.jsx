import {
  Card,
  CardActionArea, Divider,
  Stack,
  Typography,
} from "@mui/material";
import data from "../../data/data.json";
import { Fragment, useState } from "react";
import PapyrosDialog from "../@core/PapyrosDialog";

const OptionsMenu = ({ setShowFooter }) => {
  const [section, setSection] = useState({
    label: "",
    listItems: [],
    image: {
      url: "",
      name: "",
    },
  });
  const [openBullets, setOpenBullets] = useState(false);

  const handleClick = (item) => {

    if (item.id === "xp") {
      window.open("https://lesvos.cityquest.gr/video/timelapse.mp4", "_blank")
    } else if (item.id === "contributors") {
      localStorage.removeItem("heroesWelcome")
      setShowFooter(true)
    } else {
      setSection(item);
      setOpenBullets(true);
    }

  }

  return (
    <Fragment>
      <Stack
        style={{
          backgroundColor: "#2f1805",
          width: 200,
          height: "auto",
          borderBottomRightRadius: "15px",
        }}
        p={2}
        spacing={1}
      >
        {data.infoMenu.map((item) => {
          if (item.divider) {
            return (
              <Stack px={2} py={1}>
                <Divider sx={{ backgroundColor: "#896B44", height: 2 }}/>
              </Stack>
            )
          }
          return (
            <Card className={"btn"}>
              <CardActionArea
                sx={{ p: 1 }}
                onClick={() => {
                  handleClick(item);
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "gameFont",
                    fontWeight: "bold",
                  }}
                  variant={"body1"}
                >
                  {item.label}
                </Typography>
              </CardActionArea>
            </Card>
          )
        })}
      </Stack>
      <PapyrosDialog
        open={openBullets}
        handleClose={() => setOpenBullets(false)}
        title={section.label}
      >
        <Stack direction={"column"} style={{ height: 500, overflow: "auto" }}>
          {
            <ul>
              {section.listItems.map((item) => (
                <li>
                  <Typography sx={{ fontFamily: "gameFont", fontSize: 32 }}>
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          }
          {section.image && section.image.url && (
            <a
              href={section.image.url}
              target={"_blank"}
              style={{ alignSelf: "center" }}
            >
              <img width={400} src={section.image.url} />
            </a>
          )}
          {section.image && section.image.name && (
            <img
              style={{ alignSelf: "center" }}
              width={400}
              src={require("../../assets/images/" + section.image.name)}
            />
          )}
        </Stack>
      </PapyrosDialog>
    </Fragment>
  );
};

export default OptionsMenu;
