import * as React from "react";
import {useEffect, useState} from "react";
import Dialog from "@mui/material/Dialog";
import {Stack, Typography} from "@mui/material";
import ButtonBased from "../ButtonBased";

function QuizBody({questions, index, handleAnswer}) {
  const question = questions && questions[index];

  if (!question) {
    return <Typography>Results</Typography>;
  }

  return (
    <Stack>
      {question.options.map((option) => {
        return (
          <ButtonBased
            image={"buttonLeftMenu.png"}
            key={option.value}
            width={"100%"}
            onClick={() => handleAnswer(option)}
            text={option.value}
          >
          </ButtonBased>
        );
      })}
    </Stack>
  );
}

export default function QuizDialog({open, handleClose, monument}) {
  const [index, setIndex] = useState(0);

  const handleAnswer = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    if (open) setIndex(0);
  }, [open]);

  return (
    <Dialog onClose={handleClose} open={open}>
      <Stack p={2} justifyContent={"center"}>
        <Typography variant={"h5"}>{monument.label}</Typography>

        <QuizBody
          questions={monument.questions}
          index={index}
          handleAnswer={handleAnswer}
        />
      </Stack>
    </Dialog>
  );
}
