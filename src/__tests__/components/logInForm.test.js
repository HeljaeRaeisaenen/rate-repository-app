import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";

import LogInForm from "../../components/LogInForm";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const mockOnSubmit = jest.fn();

      render(<LogInForm onSubmit={mockOnSubmit} />);
      fireEvent.changeText(screen.getByPlaceholderText("Username"), "kalle");
      fireEvent.changeText(screen.getByPlaceholderText("Password"), "password");
      fireEvent.press(screen.getByText("Sign in"));

      await waitFor(() => {
        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
        expect(mockOnSubmit.mock.calls[0][0]).toEqual({
          username: "kalle",
          password: "password",
        });
      });
    });
  });
});
