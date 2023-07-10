import { History } from './history';

const workItem = new History({
  designation: 'Software Engineer',
  company: 'Google',
  yearsOfExperience: 3,
  period: '2019 - Present',
});

it('should create a work item with correct company name', () => {
  expect(workItem.company).toEqual('Google');
});

it('should create a work item with correct designation', () => {
  expect(workItem.designation).toEqual('Software Engineer');
});

it('should create a work item with correct years of experience', () => {
  expect(workItem.yearsOfExperience).toEqual(3);
});

it('should create a work item with correct period', () => {
  expect(workItem.period).toEqual('2019 - Present');
});
