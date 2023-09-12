const SUCCESS = (res, data) => (
    res.status(200).json({
        status: "OK",
        data: data
    })
);

const ERROR = (res, errorMessage) => (
    res.status(400).json({
        status: "ERR",
        error: errorMessage
    })
);

export default {
    SUCCESS,
    ERROR
};
