interface HowToPlayScreenProps {
    setShowModal: (showModal: boolean) => void;
}


const HowToPlayScreen: React.FC<HowToPlayScreenProps> = ({ setShowModal }) => {

    return (
        <div className="flex flex-col space-y-4 w-80">
            <h2 className="text-3xl font-bold text-center">How to play</h2>

            <p className="text-sm">
                The objective of the game is to find groups of four items that share something in common.
                Each group will form a category, and there will be exactly one solution for each puzzle.
                Be careful, as there are words that may seem to belong to multiple categories!
            </p>

            <p className="text-xl font-bold">Examples</p>

            <div className="text-sm">
                <p><strong>Category:</strong> FISH</p>
                <p>Bass, Flounder, Salmon, Trout</p>
            </div>
            <div className="text-sm mt-4">
                <p><strong>Category:</strong> FIRE ___</p>
                <p>Ant, Drill, Island, Opal</p>
            </div>
            <p className="text-sm mt-4">
                Categories will always be more specific than general words like "5-LETTER-WORDS," "NAMES," or "VERBS." <br /><br />
                You have to find all the groups without making more than 4 mistakes! <br /><br />
                Each group will be assigned a color, which will be revealed as you solve the puzzle:
            </p>

            <div className="text-sm flex flex-col">
                <div className="flex flex-row items-center">
                    <div className="bg-yellow rounded w-6 h-6 m-1" />
                    <p>Straightforward</p>
                </div>
                <div className="bg-green rounded w-6 h-6 m-1 " />
                <div className="bg-blue rounded w-6 h-6 m-1" />
                <div className="flex flex-row items-center">
                    <div className="bg-purple rounded w-6 h-6 m-1" />
                    <p>Tricky</p>
                </div>
            </div>

            <div className="flex flex-row flex-grow items-center justify-end w-full">
                <div className="flex flex-wrap gap-3 justify-center w-full">
                    <button
                        className="bg-black text-white font-bold mb-3 py-2 px-3 border border-black rounded-full w-48"
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HowToPlayScreen;
