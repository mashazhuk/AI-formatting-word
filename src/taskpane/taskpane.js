/* global Word console */

export async function insertText(text) {
  // Write text to the document.
  try {
    await Word.run(async (context) => {
      let body = context.document.body;
      body.insertParagraph(text, Word.InsertLocation.end);
      await context.sync();
    });
  } catch (error) {
    console.log("Error: " + error);
  }
}

export async function insertBoldText(text) {
  try {
    await Word.run(async (context) => {
      let body = context.document.body;
      let paragraph = body.insertParagraph(text, Word.InsertLocation.end);
      paragraph.font.bold = true;
      await context.sync();
    });
  } catch (error) {
    console.log("Error: " + error);
  }
}