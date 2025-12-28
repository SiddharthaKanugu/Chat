import { resendClient } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "./emailTemplates.js";

export const sendWelcomeEmail = async (email,name,clientURL) => {
    const {data, error} = await resendClient.emails.send({
        from: "Chat App <onboarding@resend.dev>",
        to: email,
        subject: "Welcome to Siddhartha's Chat_App",
        html: createWelcomeEmailTemplate(name, clientURL)
    });

    if (error) {
        console.log("Error sending Welcome email:", error);
        throw new Error("Failed to send welcome email");
    }

    console.log("Welcome email send successfully",data);
};