import React, { useState } from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import theme from "prism-react-renderer/themes/github"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Transition } from "semantic-ui-react"
import "./codeblock.scss"

export default ({ children, className, live }) => {
  const [copyStatus, setCopyStatus] = useState(false)
  const [codeVisibility, setCodeVisibility] = useState(false)
  const copyCode = () => {
    setCopyStatus(true)
    setTimeout(() => setCopyStatus(false), 3000)
  }
  const showCode = () => {
    setCodeVisibility(!codeVisibility)
  }
  const language = className && className.replace(/language-/, "")
  if (live) {
    return (
      <div className="ui codeblock">
        <Transition visible={copyStatus} animation="fade" duration={500}>
          <div className="ui success message">Code successfully copied</div>
        </Transition>
        <LiveProvider code={children} theme={theme}>
          <div class="html ui top attached segment">
            <LivePreview />
            <div class="ui top attached label">
              Example{" "}
              <button
                type="button"
                onClick={showCode}
                title={`${codeVisibility ? "Hide" : "Show"} code`}
              >
                {codeVisibility ? (
                  <i
                    data-content="Hide code"
                    aria-label="Hide code"
                    class="arrow up icon"
                  ></i>
                ) : (
                  <i
                    data-content="Show code"
                    aria-label="Show code"
                    class="arrow down icon"
                  ></i>
                )}
              </button>
              <CopyToClipboard text={children} onCopy={copyCode}>
                <i
                  data-content="Copy code"
                  aria-label="Copy code"
                  class="clipboard icon"
                ></i>
              </CopyToClipboard>
            </div>
          </div>
          <Transition visible={codeVisibility} animation="fade" duration={500}>
            <div className="ui instructive bottom attached segment">
              <LiveEditor />
            </div>
          </Transition>
          <LiveError />
        </LiveProvider>
      </div>
    )
  }
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
