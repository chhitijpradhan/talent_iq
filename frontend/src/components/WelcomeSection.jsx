import { ArrowRightIcon, ZapIcon, SparklesIcon } from "lucide-react";
import { useUser } from "@clerk/clerk-react";

const WelcomeSection = ({ onCreateSession }) => {
    const { user } = useUser();
    return (
        <div className="relative overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6 py-16">
                <div className="flex items-center justify-between">
                    <div>
                        <div className=" flex items-center gap-3 mb-4">
                            <div className="size-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center ">
                                <SparklesIcon />
                            </div>
                            <h1 className=" text-5xl font-black bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text text-transparent">
                                Welcome back, {user?.firstName || "there"}!</h1>

                        </div>
                        <p className="text-xl text-base-content/60 ml-16">
                            Ready to level up your coding skills?
                        </p>
                    </div>
                    <button onClick={onCreateSession} className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-2xl transition-all duartion-200 hover:opacity-90 ">
                        <div className="flex items-center gap-3 text-white font-bold text-lg">
                            <ZapIcon className=" size-6" />
                            <span>Create Session</span>
                            <ArrowRightIcon className=" size-5 group-hover:translate-x-1 transition-transform" />
                        </div></button>
                </div>
            </div>
        </div>
    )
}
export default WelcomeSection;