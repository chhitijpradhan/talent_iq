function OutuputPanel({output}) {
    return (
        <div >
            <div>
                Output
            </div>
            <div>
                {output == null ? (
                    <p>Click "Run Code " to see the output</p>
                ): output.success ? (
                    <pre></pre>

                ): (
                    <div>
                        {output.output &&(
                            <pre className="text-sm font-mono text-base-content whitespace-pre-wrap mb-2 ">
                                {output.output}
                            </pre>
                        )}
                        
                    </div>
                )}
            </div>
        </div>
    )
}