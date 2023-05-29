import React, { createContext, useContext, useMemo, useReducer } from "react";

const TYPE = {
  UPDATE_SAMPLE: "UPDATE_SAMPLE",
};

const initialSampleState = {
  theme: "light",
};

const SampleContext = createContext([initialSampleState, () => null]);

function sampleReducer(state, action) {
  switch (action.type) {
    case TYPE.UPDATE_SAMPLE: {
      return {
        ...state,
        theme: action.payload.datasets,
      };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

function SampleProvider(props) {
  const [state, dispatch] = useReducer(sampleReducer, initialSampleState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <SampleContext.Provider value={value} {...props} />;
}

function useSample() {
  const context = useContext(SampleContext);
  if (!context) {
    throw new Error("useSample must be used within a SampleProvider");
  }

  const [state, dispatch] = context;

  const updateSample = (theme) => {
    dispatch({
      type: TYPE.UPDATE_SAMPLE,
      payload: { theme },
    });
  };

  return {
    state,
    updateSample,
  };
}

export { SampleProvider, useSample };
