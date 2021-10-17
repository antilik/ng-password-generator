import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  password: string = "";
  passLength: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  btnGenerateDisabled: boolean = true;

  onChangeLength(value: string): void {
    const parsedValue: number = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.passLength = parsedValue;
    }
  }

  onChangeUseLetters(): void {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols(): void {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    const numbers: string = "1234567890";
    const letters: string = "abcdefghijklmnopqrstuvwxyz";
    const symbols: string = "!@#$%^&*()";
    let validChars: string = "";

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    if (!validChars) {
      return;
    }

    let generatedPassword = "";
    for (let index = this.passLength; index > 0; index--) {
      const ind = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[ind];
    }
    this.password = generatedPassword;
  }
}
