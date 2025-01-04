import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";

describe("UserAccount", () => {
  it("renders user profile with name", () => {
    const user: User = { name: "John Doe", isAdmin: false };

    render(<UserAccount user={user} />);

    expect(screen.getByText(/User Profile/i)).toBeInTheDocument();
    expect(screen.getByText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
  it("renders Edit button when the user is an admin", () => {
    const user: User = { name: "Admin User", isAdmin: true };

    render(<UserAccount user={user} />);

    expect(screen.getByText(/Edit/i)).toBeInTheDocument();
  });

  it("does not render Edit button when user isnt admin", () => {
    const user: User = { name: "Regular User", isAdmin: false };

    render(<UserAccount user={user} />);
    expect(screen.queryByText(/Edit/i)).not.toBeInTheDocument();
  });
});
