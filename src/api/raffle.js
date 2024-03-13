// 具体的API使用
import {get, post, put, deleteRequest } from './request.js'

// 根据策略ID获取策略下的全部奖品
export const getAwardDataByStrategyId = (strategyDto) => {
 return post('/api/v1/raffle/query_raffle_award_list', strategyDto)
}

// 参与抽奖
export const startRaffle = (strategyDto) => {
 return post('/api/v1/raffle/random_raffle', strategyDto)
}

// 根据id进行概率装配
export const assembleOdds = (strategyId) => {
 return get(`/api/v1/raffle/strategy_armory`, strategyId)
}