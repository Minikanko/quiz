interface scoreAction {
    type: "score/CHECK_CORRECT" | "play/IS_REPLAY" | "page/next";
    payload: scoreProps;
}

interface scoreProps {
    text?: string;
    isCorrect?: boolean;
    score?: number;
    page?:number;
}