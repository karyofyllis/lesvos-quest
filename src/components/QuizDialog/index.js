import * as React from "react";
import { useEffect, useState } from "react";
import {Box, Card, CardActionArea, Stack, Typography} from "@mui/material";
import PapyrosDialog from "../@core/PapyrosDialog";
import victory from "../../assets/audio/correctSound.mp3";
import defeat from "../../assets/audio/failSound.mp3";
import useSound from "use-sound";

function QuizBody({
  questions,
  index,
  handleAnswer,
  correctAnswers,
  wrongAnswers,
}) {
  const question = questions && questions[index];

  if (!question) {
    return (
      <Stack rowGap={2}>
        <Typography
          variant={"h6"}
          sx={{ color: "#ad3c17", fontWeight: "bold", textAlign: "center" }}
        >
          ΑΠΟΤΕΛΕΣΜΑ
        </Typography>

        <Typography
          sx={{ color: "#ad3c17", fontWeight: "bold", textAlign: "center" }}
        >
          {correctAnswers === 0
            ? "Δεν κατάφερες να βρείς καμία σωστή απάντηση!"
            : `Απάντησες σωστά στις ${correctAnswers} απο τις ${questions.length} ερωτήσεις!`}
        </Typography>
        <Box textAlign={'center'}>
        {correctAnswers < questions.length ?
          <img src={require('../../assets/images/defeatAsset.png')} width={300}/>
          :
          <img src={require('../../assets/images/winAsset.png')} width={300}/>
        }
        </Box>
      </Stack>
    );
  }

  return (
    <Stack rowGap={1}>
      <Typography
        sx={{
          color: "#ad3c17",
          fontWeight: "bold",
          mb: 2,
          textAlign: "center",
        }}
        variant={"h6"}
      >
        {question.label}
      </Typography>
      {question.options.map((option) => {
        return (
          <Card
            className={"btn"}
            key={option.value}
            width={"100%"}
            onClick={() => handleAnswer(option)}
          >
            <CardActionArea sx={{ p: 2 }} disableRipple>
              <Typography
                className={"shadow"}
                sx={{ color: "white", fontWeight: "bold" }}
              >
                {option.value}
              </Typography>
            </CardActionArea>
          </Card>
        );
      })}
    </Stack>
  );
}

export default function QuizDialog({ open, handleClose, monument, stopSound }) {
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState([]);

  const [playDefeat, defeatExposer] = useSound(defeat);
  const [playVictory, victoryExposer] = useSound(victory);

  const handleAnswer = (answer) => {
    setAnswered((prevState) => {
      const newAnswers = [...prevState, answer];

      const correctAnswers = newAnswers.filter((x) => x.correct).length;

      if (newAnswers.length === monument.questions.length) {
        stopSound()
        if (correctAnswers === newAnswers.length) {
          playVictory();
        } else {
          playDefeat();
        }
      }

      return newAnswers;
    });
    setIndex(index + 1);
  };

  useEffect(() => {
    if (open) {
      setIndex(0);
      setAnswered([]);
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      victoryExposer.stop();
      defeatExposer.stop();
    }
  }, [defeatExposer, open, victoryExposer]);

  const correctAnswers = answered.filter((x) => x.correct).length;
  const wrongAnswers = answered.filter((x) => !x.correct).length;

  return (
    <PapyrosDialog handleClose={handleClose} open={open} title={"Μάχη"}>
      <Stack>
        <Typography
          sx={{
            color: "#ad3c17",
            fontWeight: "bold",
            mb: 2,
            textAlign: "center",
          }}
          variant={"h5"}
        >
          {monument.label}
        </Typography>
        {index < monument.questions.length -1 &&
          <Typography
            sx={{ color: "#ad3c17", fontWeight: "bold", textAlign: "center" }}
          >
            {`${index + 1}/${monument.questions.length}`}
          </Typography>
        }
      </Stack>
      <QuizBody
        questions={monument.questions}
        index={index}
        handleAnswer={handleAnswer}
        correctAnswers={correctAnswers}
        wrongAnswers={wrongAnswers}
      />
    </PapyrosDialog>
  );
}
