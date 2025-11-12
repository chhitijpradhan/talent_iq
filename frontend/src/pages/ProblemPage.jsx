import { useNavigate, useParams } from "react-router";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { PROBLEMS } from "../data/problems";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import toast from "react-hot-toast";
function ProblemPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentProblemId, setCurrentProblemId] = useState("two-sum");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(PROBLEMS[currentProblemId].starterCode.javascript);
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const currentProblem = PROBLEMS[currentProblemId];

  // update problem when url param changes
  useEffect(() => {
    if (id && PROBLEMS[id]) {
      setCurrentProblemId(id);
      setCode(PROBLEMS[id].starterCode[selectedLanguage]);
      setOutput(null);
    }
  }, [id, selectedLanguage]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    setCode(currentProblem.starterCode[newLang]);
    setOutput(null);
  };

  const handleProblemChange = (newProblemId) => navigate(`/problem/${newProblemId}`);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.2, y: 0.6 },
    });


    Confetti({
      particleCount: 80,
      spred: 250,
      origin: { x: 0.2, y: 0.6 },
    });
  };

  const normalizeOutput = (output) => {
    return output
      .trim()
      .split("\n")
      .map((line) =>
        line
          .trim()
          // remove spaces after [ and before ]
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          // normalize spaces around commas to single space after comma
          .replace(/\s*,\s*/g, ",")
      )
      .filter((line) => line.length > 0)
      .join("\n");

  }
  const checkIfTestsPassed = (actualOutput, expectedOutput) => {
    const normalizedActual = normalizeOutput(actualOutput);
    const normalizedExpected = normalizeOutput(expectedOutput);

    return normalizedActual == normalizedExpected;
  }

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);

    const result = await executeCode(selectedLanguage, code);
    setOutput(result);
    setIsRunning(false)


    // check if code executed successfully and matches expected output
    if (result.success) {
      const expectedOutput = currentProblem.expectedOutput[selectedLanguage];
      const testsPassed = checkIfTestsPassed(result.output, expectedOutput);

      if (testsPassed) {
        triggerConfetti();
        toast.success("All tests passed! Great job!")
      } else {
        toast.error("Test faled. Checked your output!");
      }
    } else {
      toast.error("Code execution failed!");
    }
  };
  return <div className="h-screen bg-base-100 flex flex-col">

    <Navbar />
    <div className="flex-1">
      <PanelGroup directional="horizontal">
        <Panel defaultSize={40} minSize={30}>
          <ProblemDescription
            problem={currentProblem}
            currentProblemId={currentProblemId}
            onProblemChange={handleProblemChange}
            allProblems={Object.values(PROBLEMS)}
          />
        </Panel>
        <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />
      </PanelGroup>
      <Panel defaultSize={60} minSize={30}>
        <PanelGroup directional="vertical">
          <CodeEditorPanel
            selectedLanguage={selectedLanguage}
            code={code}
            onLanguageChange={handleLanguageChange}
            onCodeChange={setCode}
            onRunCode={handleRunCode}
            isRunning={isRunning}
          />
          <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

          {/* Bottom panel - Output Panel*/}

          <Panel defaultSize={30} minSize={30}>
            <OutputPanel output={output} />
          </Panel>
        </PanelGroup>
      </Panel>

    </div>
  </div>;
};

export default ProblemPage;
