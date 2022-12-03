import * as React from "react";
import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { Box, CardActionArea, Stack, Typography } from "@mui/material";

function QuizBody({ questions, index, handleAnswer }) {
  const question = questions[index];

  if (question) {
    return <Typography>Results</Typography>;
  }

  return (
    <Stack>
      <Typography>{question.label}</Typography>
      {question.options.map((option) => {
        return (
          <CardActionArea
            disableRipple
            key={option.value}
            onClick={() => handleAnswer(option)}
          >
            {option.value}
          </CardActionArea>
        );
      })}
    </Stack>
  );
}

export default function QuizDialog({ open, handleClose, quiz }) {
  const [index, setIndex] = useState(0);

  const handleAnswer = () => {
    setIndex(index + 1);
  };

  useEffect(
    (answer) => {
      if (open) setIndex(0);
    },
    [open]
  );

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box>
        <Typography>Quiz</Typography>

        <QuizBody
          questions={quiz.questions}
          index={index}
          handleAnswer={handleAnswer}
        />
      </Box>
    </Dialog>
  );
}
