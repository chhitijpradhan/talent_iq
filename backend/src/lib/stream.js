import {StreamChat} from "stream-chat";
import { StreamClient } from "@stream-io/node-sdk"
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apikey || !apiSecret ){
    console.error(" STREAM APILEY or STREAM SECRET KEY is missing ")

}
export const chatClient = StreamChat.getInstance(apiKey, apiSecret);
export const upserStreamUser = async (userData) => {
    try {
        await chatClient.upsertUser([userData])
        return userData
    } catch (error) {
        console.error("Error upserting stream user", error);
    }
}
export const deterStreamUser  = async (userId) =>{
    try{
        await chatClient.delete(userId)
        console.log("Stream user deleted successfully", userId);
    } catch (error){
        console.error("Error deleting the stream user" , error);
    }
}