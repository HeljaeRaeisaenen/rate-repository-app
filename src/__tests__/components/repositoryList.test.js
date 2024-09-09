import { render, screen } from "@testing-library/react-native";
import { PaperProvider } from "react-native-paper";

import { RepositoryListContainer } from "../../components/RepositoryList";
import { theme } from "../../components/theme";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };
      render(
        <PaperProvider theme={theme}>
          <RepositoryListContainer repositories={repositories} />
        </PaperProvider>
      );

      const elements = screen.getAllByTestId("repositoryItem");
      expect(elements).toHaveLength(2);
      expect(elements[0]).toHaveTextContent("jaredpalmer/formik");
      expect(elements[0]).toHaveTextContent(
        '"Build forms in React, without the tears"'
      );
      expect(elements[0]).toHaveTextContent("21.9k stars");
      expect(elements[0]).toHaveTextContent("1.6k forks");
      expect(elements[0]).toHaveTextContent("88 rating");
      expect(elements[0]).toHaveTextContent("3 reviews");
      expect(elements[0]).toHaveTextContent("TypeScript");

      expect(elements[1]).toHaveTextContent("async-library/react-async");
      expect(elements[1]).toHaveTextContent(
        '"Flexible promise-based React data loader"'
      );
      expect(elements[1]).toHaveTextContent("JavaScript");
      expect(elements[1]).toHaveTextContent("1.8k stars");
      expect(elements[1]).toHaveTextContent("69 forks");
      expect(elements[1]).toHaveTextContent("72 rating");
      expect(elements[1]).toHaveTextContent("3 reviews");
    });
  });
});
