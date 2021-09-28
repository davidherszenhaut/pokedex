import { getColor } from "./PokeDetailTypes";

test("should return proper color", () => {
  expect(getColor("normal")).toBe("bg-gray-500");
  expect(getColor("fighting")).toBe("bg-red-500");
  expect(getColor("flying")).toBe("bg-purple-400");
  expect(getColor("poison")).toBe("bg-purple-800");
  expect(getColor("ground")).toBe("bg-yellow-300");
  expect(getColor("rock")).toBe("bg-yellow-600");
  expect(getColor("bug")).toBe("bg-green-400");
  expect(getColor("ghost")).toBe("bg-purple-500");
  expect(getColor("steel")).toBe("bg-gray-400");
  expect(getColor("fire")).toBe("bg-yellow-500");
  expect(getColor("water")).toBe("bg-blue-500");
  expect(getColor("grass")).toBe("bg-green-700");
  expect(getColor("electric")).toBe("bg-yellow-300");
  expect(getColor("psychic")).toBe("bg-pink-400");
  expect(getColor("ice")).toBe("bg-blue-200");
  expect(getColor("dragon")).toBe("bg-purple-900");
  expect(getColor("dark")).toBe("bg-gray-700");
  expect(getColor("fairy")).toBe("bg-pink-300");
  expect(getColor("unknown")).toBe("bg-green-500");
  expect(getColor("shadow")).toBe("bg-gray-700");
  expect(getColor("default")).toBe("bg-gray-500");
});
