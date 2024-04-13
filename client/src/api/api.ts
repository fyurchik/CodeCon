import ky from "ky";

export const api = ky.create({
    prefixUrl: "http://10.4.121.227:8000/",
    headers: {
        "Content-Type": "application/json",
    },
});
