import * as types from './actionTypes';

let nextMonsterUUID = 0;
let nextCardUUID = 0;

const gameStates = {
  BATTLE: 'battle',
  REWARD: 'reward'
};

function isMonstersAlive(state) {
  return state.battle.monsters.filter(monster => monster.hp > 0).length;
}

export const initialState = {
  gameState: gameStates.BATTLE,
  player: {
    hp: 100,
    deck: [],
    maxAP: 100
  },
  cards: {
    allIds: [],
    byIds: {}
  },
  monsters: {
    allIds: [],
    byIds: {}
  },
  battle: {
    cards: [],
    selectingCard: true,
    selectingTarget: false,
    hp: 100,
    currentAP: 0,
    maxAP: 0,
    queuedActions: [],
    monsters: [],
    monsterMoves: {},
    turn: 0
  }
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_GAME_STATE: {
      const { targetState } = action.payload;
      return {
        ...state,
        gameState: targetState
      };
    }

    case types.SET_BATTLE_CARDS: {
      const { cards } = action.payload;
      return {
        ...state,
        battle: {
          ...state.battle,
          cards: cards
        }
      };
    }

    case types.ADD_BATTLE_TURN: {
      const { value } = action.payload;
      return {
        ...state,
        battle: {
          ...state.battle,
          turn: state.battle.turn + value
        }
      };
    }
    case types.ADD_CARD_TO_DECK: {
      const { id } = action.payload;
      return {
        ...state,
        player: {
          ...state.player,
          deck: [...state.player.deck, { id: id, uuid: ++nextCardUUID }]
        }
      };
    }

    case types.REMOVE_CARD_FROM_DECK: {
      const { uuid } = action.payload;
      return {
        ...state,
        player: {
          ...state.player,
          deck: state.player.deck.filter(card => card.uuid !== uuid)
        }
      };
    }

    case types.DECREMENT_ACTIONS: {
      const { amount } = action.payload;
      return {
        ...state,
        battle: {
          ...state.battle,
          currentAP:
            state.battle.currentAP >= amount
              ? state.battle.currentAP - amount
              : 0
        }
      };
    }

    case types.CREATE_MONSTER: {
      const { id, name, hp, moves } = action.payload;
      return {
        ...state,
        monsters: {
          allIds: [...state.monsters.allIds, id],
          byIds: {
            ...state.monsters.byIds,
            [id]: {
              name,
              hp,
              moves
            }
          }
        }
      };
    }

    case types.ADD_MONSTER: {
      const { id } = action.payload;
      return {
        ...state,
        battle: {
          ...state.battle,
          monsters: [
            ...state.battle.monsters,
            { id: id, uuid: ++nextMonsterUUID, hp: state.monsters.byIds[id].hp }
          ]
        }
      };
    }

    case types.SET_MONSTER_MOVES: {
      const { uuid, move } = action.payload;

      return {
        ...state,
        battle: {
          ...state.battle,
          monsterMoves: {
            ...state.battle.monsterMoves,
            [uuid]: move
          }
        }
      };
    }

    case types.RESET_ALL_MONSTER_MOVES: {
      return {
        ...state,
        battle: {
          ...state.battle,
          monsterMoves: {}
        }
      };
    }

    case types.ADD_TO_BATTLE_HP: {
      const { value } = action.payload;

      let returnState = {
        ...state,
        battle: {
          ...state.battle,
          hp: state.battle.hp + value
        }
      };

      if (
        returnState.gameState === gameStates.BATTLE &&
        returnState.battle.hp <= 0
      ) {
        returnState.gameState = gameStates.REWARD;
      }

      return returnState;
    }

    case types.SET_QUEUED_ACTIONS: {
      const { actions } = action.payload;
      return {
        ...state,
        battle: {
          ...state.battle,
          queuedActions: actions
        }
      };
    }

    case types.SET_BATTLE_CURRENT_AP: {
      const { ap } = action.payload;
      return {
        ...state,
        battle: {
          ...state.battle,
          currentAP: ap
        }
      };
    }

    case types.SET_BATTLE_MAX_AP: {
      const { ap } = action.payload;
      return {
        ...state,
        battle: {
          ...state.battle,
          maxAP: ap
        }
      };
    }

    case types.ATTACK_MONSTER: {
      const { uuid, dmg } = action.payload;

      let returnState = {
        ...state,
        battle: {
          ...state.battle,
          monsters: state.battle.monsters.map(monster => {
            if (monster.uuid === uuid) {
              monster.hp = dmg <= monster.hp ? monster.hp - dmg : 0;
            }
            return monster;
          })
        }
      };

      if (
        returnState.gameState === gameStates.BATTLE &&
        !isMonstersAlive(returnState)
      ) {
        returnState.gameState = gameStates.REWARD;
      }

      return returnState;
    }

    case types.ATTACK_ALL_MONSTERS: {
      const { dmg } = action.payload;

      let returnState = {
        ...state,
        battle: {
          ...state.battle,
          monsters: state.battle.monsters.map(monster => {
            monster.hp = dmg <= monster.hp ? monster.hp - dmg : 0;
            return monster;
          })
        }
      };

      if (
        returnState.gameState === gameStates.BATTLE &&
        !isMonstersAlive(returnState)
      ) {
        returnState.gameState = gameStates.REWARD;
      }

      return returnState;
    }

    case types.CREATE_CARD: {
      const {
        id,
        name,
        description,
        cost,
        actions,
        needsTarget
      } = action.payload;
      return {
        ...state,
        cards: {
          allIds: [...state.cards.allIds, id],
          byIds: {
            ...state.cards.byIds,
            [id]: {
              name,
              cost,
              description,
              actions,
              needsTarget
            }
          }
        }
      };
    }

    case types.ENABLE_TARGET_SELECTION: {
      return {
        ...state,
        battle: {
          ...state.battle,
          selectingCard: false,
          selectingTarget: true
        }
      };
    }

    case types.DISABLE_TARGET_SELECTION: {
      return {
        ...state,
        battle: {
          ...state.battle,
          selectingCard: true,
          selectingTarget: false
        }
      };
    }

    case types.ACTIVATE_CARD: {
      const { uuid } = action.payload;

      return {
        ...state,
        battle: {
          ...state.battle,
          activeCard: uuid
        }
      };
    }

    case types.DEACTIVATE_CARD: {
      return {
        ...state,
        battle: {
          ...state.battle,
          activeCard: null
        }
      };
    }

    case types.MOVE_BATTLE_CARD_TO_DECK_BY_CARD: {
      const { cardArray, targetDeck } = action.payload;

      let uuidArray = cardArray.map(card => card.uuid);

      return {
        ...state,
        battle: {
          ...state.battle,
          cards: state.battle.cards.map(card => {
            if (uuidArray.includes(card.uuid)) {
              card.deck = targetDeck;
            }
            return card;
          })
        }
      };
    }

    case types.MOVE_BATTLE_CARD_TO_DECK_BY_UUID: {
      const { uuidArray, targetDeck } = action.payload;

      return {
        ...state,
        battle: {
          ...state.battle,
          cards: state.battle.cards.map(card => {
            if (uuidArray.includes(card.uuid)) {
              card.deck = targetDeck;
            }
            return card;
          })
        }
      };
    }

    default:
      return state;
  }
}
