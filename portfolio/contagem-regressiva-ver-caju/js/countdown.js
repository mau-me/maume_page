export default class Coutdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }

  get _actualDate() {
    return new Date();
  }

  get _futureDate() {
    return new Date(this.futureDate);
  }

  get _timeDifference() {
    return this._futureDate - this._actualDate;
  }

  get _days() {
    return Math.floor(this._timeDifference / (1000 * 60 * 60 * 24));
  }

  get _hours() {
    return Math.floor(
      (this._timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
  }

  get _minutes() {
    return Math.floor((this._timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  }

  get _seconds() {
    return Math.floor((this._timeDifference % (1000 * 60)) / 1000);
  }

  get total() {
    const days = this._days < 10 ? `0${this._days}` : this._days;
    const hours = this._hours < 10 ? `0${this._hours}` : this._hours;
    const minutes = this._minutes < 10 ? `0${this._minutes}` : this._minutes;
    const seconds = this._seconds < 10 ? `0${this._seconds}` : this._seconds;

    return [days, hours, minutes, seconds];
  }
}
