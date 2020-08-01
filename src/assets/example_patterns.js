import React from 'react';

function ExamplePatterns() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img
        alt='example-patterns'
        src='https://camo.githubusercontent.com/a710386de69bcb8577875246196c7fb07144ff0c/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f3456565a547654717a5252304255774e49482f67697068792e676966'
      />
      <span style={{ alignSelf: 'flex-end' }}>
        Example Patterns from
        <a
          href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns'
          rel='nofollow'
        >
          Wikipedia
        </a>
      </span>
    </div>
  );
}

export default ExamplePatterns;
