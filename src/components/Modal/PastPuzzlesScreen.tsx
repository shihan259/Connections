import { useToast } from "@/contexts/ToastContext";
import { Puzzle } from "@/interfaces/interfaces";
import { createSupabaseClient } from "@/utils/database";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface PastPuzzlesScreenProps {
  setShowModal: (showModal: boolean) => void;
}

const PastPuzzlesScreen: React.FC<PastPuzzlesScreenProps> = ({
  setShowModal,
}) => {
  // TODO: Create a context for supabase so that we don't have to create a new client in every component
  const supabase = createSupabaseClient();
  const router = useRouter();
  const [puzzles, setPuzzles] = useState<Puzzle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPuzzles = async () => {
      try {
        const { data, error } = await supabase
          .from("Puzzles")
          .select("slug, date_created")
          .order("date_created", { ascending: false });

        if (error) {
          throw error;
        }

        // Set the word list and answers
        setPuzzles(
          data.map((puzzle) => ({
            slug: puzzle.slug,
            dateCreated: format(new Date(puzzle.date_created), "do MMMM yyyy"),
          }))
        );
        setIsLoading(false);
      } catch (error) {
        // showToast("Error fetching puzzles", 3000);
      }
    };

    // TODO: Currently fetching puzzle is done every time the modal is opened.
    // This can be optimized by fetching the puzzles once and storing them in a context
    fetchPuzzles();
  }, []);

  const handleOnPuzzleClick = (slug: string) => {
    setShowModal(false);
    router.push(`/${slug}`);
  };

  return (
    <>
      {isLoading ? (
        <div className="min-w-[40vw] min-h-[30vh] flex items-center justify-center m-auto  p-auto">
          <div
            className="animate-spin inline-block size-12 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
            role="status"
            aria-label="loading"
          ></div>
        </div>
      ) : (
        <div className="flex flex-col min-w-[40vw] overflow-x-hidden">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold m-6">Past Konnections</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer mr-6"
              onClick={() => setShowModal(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <ul className="shadow-lg rounded w-full">
            {puzzles.map((puzzle, index) => (
              <li
                key={index}
                className="border-t border-gray-200 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOnPuzzleClick(puzzle.slug)}
              >
                <div className="px-4 py-5 sm:px-6">
                  <div className="flex items-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {puzzle.dateCreated}
                    </h3>
                    {puzzle.slug === puzzles[0].slug && (
                      <span className="ml-2 text-xs text-green">
                        ● Current Puzzle
                      </span>
                    )}
                  </div>
                  {/* For future use if description or sub-text is used */}
                  {/* <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500">
                      {"Description"}
                    </p>
                  </div> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default PastPuzzlesScreen;
