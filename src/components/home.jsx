import { ThemeToggle } from "./themeToggle";
import { StarBackground } from "./starBackground";


export default function Home (){
        return (
            <div className = "min-h-screen bg-background text-foreground overflow-x-hidden">
            {/*Theme Toggle*/}
            <ThemeToggle/>

            {/*Background  Effects*/}
            <StarBackground/>
            {/*NavBar*/}


             {/*Theme Toggle*/}

            </div>
        );
}


