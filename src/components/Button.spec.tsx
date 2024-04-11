import {
  it,
  vi,
  expect,
  beforeEach,
} from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Button from './Button';

beforeEach(() => {
  /** 스파이 함수 초기화 */
  vi.resetAllMocks();
});

it('disabled 설정시 버튼 이벤트가 호출되지 않아야 한다.', async () => {
  // Arrange
  const onClick = vi.fn();
  render(<Button.Primary label="Click me" disabled onClick={onClick} />);

  // Act
  await userEvent.click(screen.getByRole('button'));

  // Assert
  expect(onClick).not.toBeCalled();
});

it('onClick 이벤트가 호출되었을 때, 전달된 함수가 실행되어야 한다.', async () => {
  // Arrange
  const onClick = vi.fn();
  render(<Button.Primary label="Click me" onClick={onClick} />);

  // Act
  await userEvent.click(screen.getByRole('button'));

  // Assert
  expect(onClick).toBeCalled();
});
