import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import myWork from "../assets/mywork_data";

const CodePage = () => {
    const { id } = useParams();
    const project = myWork.find(work => work.w_no === parseInt(id));
    const [activeTab, setActiveTab] = useState("html");

    const renderCode = () => {
        switch (activeTab) {
            case "html":
                return project?.htmlcode || "// Code not available";
            case "css":
                return project?.csscode || "// Code not available";
            case "js":
                return project?.jscode || "// Code not available";
            default:
                return "// Code not available";
        }
    };

    return (
        <div className="container mx-auto p-10">
            <h2 className="text-6xl text-center my-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {project?.w_name || "Project"}
            </h2>

            {/* Tab Buttons */}
            <div className="flex justify-center mb-5">
                <button
                    className={`px-4 py-2 mx-2 rounded-lg ${activeTab === "html" ? "bg-purple-500 text-white" : "bg-gray-200"}`}
                    onClick={() => setActiveTab("html")}
                >
                    HTML
                </button>
                <button
                    className={`px-4 py-2 mx-2 rounded-lg ${activeTab === "css" ? "bg-purple-500 text-white" : "bg-gray-200"}`}
                    onClick={() => setActiveTab("css")}
                >
                    CSS
                </button>
                <button
                    className={`px-4 py-2 mx-2 rounded-lg ${activeTab === "js" ? "bg-purple-500 text-white" : "bg-gray-200"}`}
                    onClick={() => setActiveTab("js")}
                >
                    JS
                </button>
            </div>
            
            <SyntaxHighlighter language="javascript" style={github}>
                {renderCode()}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodePage;
