import moment from 'moment';

export class Task {
  title!: string;
  startDate!: string;
  endDate!: string;
}

export class TaskView extends Task {
  get leftDays(): number {
    return moment(this.endDate).diff(moment(), 'days');
  }

  get totalDays(): number {
    return moment(this.endDate).diff(this.startDate, 'days');
  }
}
