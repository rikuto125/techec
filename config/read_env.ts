//process.envを読み込む
import dotenv from "dotenv";

dotenv.config();
//NEXT_PUBLIC_API_URLをenvファイルから読み込む

interface Config {
    NEXT_PUBLIC_API_URL: string;
}


const settings: Config = {
    NEXT_PUBLIC_API_URL : process.env.NEXT_PUBLIC_API_URL as string,
};

export default settings;