import ky from "ky";

export const apiClient = ky.create({
    prefixUrl: "http://ec2-52-22-186-155.compute-1.amazonaws.com",
});

