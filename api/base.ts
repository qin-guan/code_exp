import ky from "ky";

export const apiClient = ky.create({
    prefixUrl: "http://ec2-18-205-152-132.compute-1.amazonaws.com",
});

