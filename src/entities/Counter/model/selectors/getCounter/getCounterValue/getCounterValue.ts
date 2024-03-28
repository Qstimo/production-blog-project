import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCounter";
import { CounterSchema } from "entities/Counter/model/type/counterSchema";

export const getCounterValue = createSelector(
    getCounter, (counter: CounterSchema) => counter.value
)