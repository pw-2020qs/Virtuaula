import * as fs from "fs"
import { config } from "../config"


export interface NewItem {
    email: string,
    perfil: string,
    institution: string,
    userName: string,
    secondName: string
    password: string
}

export interface User extends NewItem {
    id: number
}
// in-memory model
export let model: User[] = []

/**
 * Load data model from disk
 */
export function loadFile() {
    try {
        console.log("Loading model from the file system...")
        model = JSON.parse(fs.readFileSync(config["users"]).toString())
        console.log("Model loaded")
    } catch (error) {
        console.error("Failed to load data model from filesystem")
        console.error((error as Error).stack)
    }
}

/**
 * Save data model to disk
 */
export function saveFile() {
    try {
        console.log("Saving model to the file system...")
        fs.writeFileSync(config["users"], JSON.stringify(model))
        console.log("Finished saving data")
    } catch (error) {
        console.error("Failed to save data model to filesystem")
        console.error((error as Error).stack)
    }

}
