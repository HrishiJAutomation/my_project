import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Header_Flex2": {
      "callbacks": {}
    },
    "Div5": {
      "callbacks": {}
    },
    "Flex3": {
      "callbacks": {}
    },
    "Header_TextBox2": {
      "custom": {
        "text": "CFP GURU"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link17": {
      "custom": {
        "text": "About",
        "url": "/aboutus"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link20": {
      "custom": {
        "text": "CFP Form",
        "url": "/cfpform"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/cfpform"
            }
          }
        ]
      }
    },
    "Link21": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox3": {
      "custom": {
        "text": "CFP GURU"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox4": {
      "custom": {
        "text": "Create killer conference submissioons with minutes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button1": {
      "custom": {
        "text": "Start"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/cfpform"
            }
          }
        ]
      }
    }
  },
  "aboutus": {
    "Flex6": {
      "callbacks": {}
    },
    "Flex10": {
      "callbacks": {}
    },
    "Div18": {
      "callbacks": {}
    },
    "TextBox11": {
      "custom": {
        "text": "We have collected all the wisdom from the internet on how to create wonderful conferrence submissions and put that into an intuitive form.CFF Guru help your structure your idea into a winning format."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "custom": {
        "text": "Need more help? Set up a free mentorship session with an expert"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button2": {
      "custom": {
        "text": "Find Slots"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "custom": {
        "text": "CFP GURU"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link28": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link29": {
      "custom": {
        "text": "CFP Form",
        "url": "/cfpform"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/cfpform"
            }
          }
        ]
      }
    },
    "Link30": {
      "custom": {
        "text": "About",
        "url": "/aboutus"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "cfpform": {
    "Flex7": {
      "callbacks": {}
    },
    "Div10": {
      "callbacks": {}
    },
    "Div11": {
      "callbacks": {}
    },
    "Div13": {
      "callbacks": {}
    },
    "Div15": {
      "callbacks": {}
    },
    "Flex11": {
      "callbacks": {}
    },
    "Div19": {
      "callbacks": {}
    },
    "TextBox13": {
      "custom": {
        "text": "Abstract generator"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "custom": {
        "text": "what kind of conferrence is this?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input10": {
      "custom": {
        "value": "",
        "placeholder": "Conferrence kind"
      },
      "callbacks": {}
    },
    "Input11": {
      "custom": {
        "value": "",
        "placeholder": "average organizer"
      },
      "callbacks": {}
    },
    "TextBox18": {
      "custom": {
        "text": "Describe the average organizer/jury committee for this conf?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "custom": {
        "text": "Describe the problem that your submission tries to address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input13": {
      "custom": {
        "value": "",
        "placeholder": "problems tries to address"
      },
      "callbacks": {}
    },
    "Button4": {
      "custom": {
        "text": "Cancel"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button5": {
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "custom": {
        "text": "CFP GURU"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link31": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link32": {
      "custom": {
        "text": "CFP Form",
        "url": "/cfpform"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/cfpform"
            }
          }
        ]
      }
    },
    "Link33": {
      "custom": {
        "text": "About",
        "url": "/aboutus"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
