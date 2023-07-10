import { History as HistoryType } from "./history.type";

export class History {
  private _designation: string;

  private _company: string;

  private _yearsOfExperience: number;

  private _period: string;

  constructor(history: HistoryType) {
    this._designation = history.designation;
    this._company = history.company;
    this._yearsOfExperience = history.yearsOfExperience;
    this._period = history.period;
  }

  get designation() {
    return this._designation;
  }

  get company() {
    return this._company;
  }

  get yearsOfExperience() {
    return this._yearsOfExperience;
  }

  get period() {
    return this._period;
  }
}