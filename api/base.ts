import ky from "ky";

export const apiClient = ky.create({
    prefixUrl: "http://ec2-3-87-184-165.compute-1.amazonaws.com",
});
