import * as types from './actionTypes'

export const addCardToDeck = id => ({
  type: types.ADD_CARD_TO_DECK,
  payload: {
    id
  }
});

export const addCardToBattleDeck = uuid => ({
  type: types.ADD_CARD_TO_BATTLE_DECK,
  payload: {
    uuid
  }
});

export const addCardToDiscard = uuid => ({
  type: types.ADD_CARD_TO_DISCARD,
  payload: {
    uuid
  }
});

export const addCardToHand = uuid => ({
  type: types.ADD_CARD_TO_HAND,
  payload: {
    uuid
  }
});

export const removeCardFromDeck = uuid => ({
  type: types.REMOVE_CARD_FROM_DECK,
  payload: {
    uuid
  }
});

export const removeCardFromBattleDeck = uuid => ({
  type: types.REMOVE_CARD_FROM_BATTLE_DECK,
  payload: {
    uuid
  }
});

export const removeCardFromDiscard = uuid => ({
  type: types.REMOVE_CARD_FROM_DISCARD,
  payload: {
    uuid
  }
});

export const removeCardFromHand = uuid => ({
  type: types.REMOVE_CARD_FROM_HAND,
  payload: {
    uuid
  }
});

export const decrementPlayerActions = amount => ({
  type: types.DECREMENT_ACTIONS,
  payload: {
    amount
  }
});

export const createCard = ({ id, name, description, cost, actions }) => ({
  type: types.CREATE_CARD,
  payload: {
    id,
    name,
    description,
    cost,
    actions
  }
});

export const createMonster = ({ id, name, hp, moves }) => ({
  type: types.CREATE_MONSTER,
  payload: {
    id,
    name,
    hp,
    moves
  }
});

export const addMonster = id => ({
  type: types.ADD_MONSTER,
  payload: {
    id
  }
});

export const attackMonster = dmg => ({
  type: types.ATTACK_TARGETED_MONSTER,
  payload: {
    dmg
  }
});

export const attackMonsterById = (id, dmg) => ({
  type: types.ATTACK_MONSTER,
  payload: {
    id,
    dmg
  }
});

export const setBattleDeck = deck => ({
  type: types.SET_BATTLE_DECK,
  payload: { deck }
});

export const setDiscardDeck = deck => ({
  type: types.SET_DISCARD_DECK,
  payload: { deck }
});

export const setHandDeck = deck => ({
  type: types.SET_HAND_DECK,
  payload: { deck }
});

export const setBattleHP = hp => ({
  type: types.SET_BATTLE_HP,
  payload: { hp }
});

export const setBattleCurrentAP = ap => ({
  type: types.SET_BATTLE_CURRENT_AP,
  payload: { ap }
});

export const setBattleMaxAP = ap => ({
  type: types.SET_BATTLE_MAX_AP,
  payload: { ap }
});

export const setQueuedActions = actions => ({
  type: types.SET_QUEUED_ACTIONS,
  payload: { actions }
});

export const setSelectedTarget = uuid => ({
  type: types.SET_SELECTED_TARGET,
  payload: { uuid }
});

export const enableTargetSelection = () => ({
  type: types.ENABLE_TARGET_SELECTION,
  payload: {}
});

export const disableTargetSelection = () => ({
  type: types.DISABLE_TARGET_SELECTION,
  payload: {}
});

export const setMonsterMoves = (uuid, move) => ({
  type: types.SET_MONSTER_MOVES,
  payload: { uuid, move }
});

export const resetMonsterMoves = () => ({
  type: types.RESET_ALL_MONSTER_MOVES,
  payload: {}
});