import * as types from './actionTypes';

export const resetMonsterEffects = () => ({
  type: types.RESET_MONSTER_EFFECTS,
});


export const addEffectToMonster = ({ effect, targetMonster }) => ({
  type: types.ADD_EFFECT_TO_MONSTER,
  payload: {
    effect,
    targetMonster,
  },
});

export const setBattleCards = ({ cards }) => ({
  type: types.SET_BATTLE_CARDS,
  payload: {
    cards,
  },
});

export const addCardToDeck = (id) => ({
  type: types.ADD_CARD_TO_DECK,
  payload: {
    id,
  },
});

export const removeCardFromDeck = (uuid) => ({
  type: types.REMOVE_CARD_FROM_DECK,
  payload: {
    uuid,
  },
});

export const decrementPlayerActions = (amount) => ({
  type: types.DECREMENT_ACTIONS,
  payload: {
    amount,
  },
});

export const createCard = ({
  id,
  name,
  description,
  cost,
  actions,
  needsTarget,
  destination,
  target,
  rarity,
  image,
}) => ({
  type: types.CREATE_CARD,
  payload: {
    id,
    name,
    description,
    cost,
    actions,
    needsTarget,
    destination,
    target,
    rarity,
    image,
  },
});

export const createMonster = ({
  id, name, hp, moves,
}) => ({
  type: types.CREATE_MONSTER,
  payload: {
    id,
    name,
    hp,
    moves,
  },
});

export const addMonster = (id) => ({
  type: types.ADD_MONSTER,
  payload: {
    id,
  },
});

export const attackMonster = ({ uuid, dmg }) => ({
  type: types.ATTACK_MONSTER,
  payload: {
    uuid,
    dmg,
    needsTarget: true,
  },
});

export const attackAllMonsters = ({ dmg }) => ({
  type: types.ATTACK_ALL_MONSTERS,
  payload: {
    dmg,
  },
});

export const addEffect = ({
  name,
  type,
  value = 0,
  stackValue = false,
  percentileValue = false,
  duration = 0,
  stackDuration = false,
  needsTarget = false,
  uuid,
}) => ({
  type: types.ADD_EFFECT,
  payload: {
    name,
    type,
    value,
    stackValue,
    percentileValue,
    duration,
    stackDuration,
    needsTarget,
    uuid,
  },
});

export const updateEffectValue = ({ type, value }) => ({
  type: types.UPDATE_EFFECT_VALUE,
  payload: {
    type,
    value,
  },
});

export const tickEffects = () => ({
  type: types.TICK_EFFECTS,
  payload: {},
});

export const addToBattleTurn = (value) => ({
  type: types.ADD_BATTLE_TURN,
  payload: {
    value,
  },
});

export const addToBattleHP = (value) => ({
  type: types.ADD_TO_BATTLE_HP,
  payload: { value },
});

export const setBattleCurrentAP = (ap) => ({
  type: types.SET_BATTLE_CURRENT_AP,
  payload: { ap },
});

export const setBattleMaxAP = (ap) => ({
  type: types.SET_BATTLE_MAX_AP,
  payload: { ap },
});

export const setQueuedActions = (actions) => ({
  type: types.SET_QUEUED_ACTIONS,
  payload: { actions },
});

export const setSelectedTarget = (uuid) => ({
  type: types.SET_SELECTED_TARGET,
  payload: { uuid },
});

export const enableTargetSelection = () => ({
  type: types.ENABLE_TARGET_SELECTION,
  payload: {},
});

export const disableTargetSelection = () => ({
  type: types.DISABLE_TARGET_SELECTION,
  payload: {},
});

export const setMonsterMoves = (uuid, move) => ({
  type: types.SET_MONSTER_MOVES,
  payload: { uuid, move },
});

export const resetMonsterMoves = () => ({
  type: types.RESET_ALL_MONSTER_MOVES,
  payload: {},
});

export const playCard = ({ id, uuid, target }) => ({
  type: types.PLAY_CARD,
  payload: { id, uuid, target },
});

export const activateCardFromHand = (uuid) => ({
  type: types.ACTIVATE_CARD,
  payload: { uuid },
});

export const deactivateCardFromHand = (uuid) => ({
  type: types.DEACTIVATE_CARD,
  payload: { uuid },
});

export const moveCardByCard = ({ cardArray, targetDeck }) => ({
  type: types.MOVE_BATTLE_CARD_TO_DECK_BY_CARD,
  payload: { cardArray, targetDeck },
});

export const moveCardByUUID = ({ uuidArray, targetDeck }) => ({
  type: types.MOVE_BATTLE_CARD_TO_DECK_BY_UUID,
  payload: { uuidArray, targetDeck },
});

export const setGameState = (targetState, nextBattle) => ({
  type: types.SET_GAME_STATE,
  payload: {
    targetState,
    nextBattle,
  },
});

export const resetBattle = ({ keepHp }) => ({
  type: types.RESET_BATTLE,
  payload: {
    keepHp,
  },
});


export const emptyPlayerDeck = () => ({
  type: types.EMPTY_PLAYER_DECK,
});

export const startMonsterMoves = () => ({
  type: types.START_MONSTER_MOVES,
});
