const isFnInsideCi = RegExp.prototype.test.bind(
  /process\.env\.CI[\S\s]+\bCI\b.+\bCI_NAME/,
);
/** Returns true if the value is inside-ci, otherwise returns false. */
const isInsideCi = (val) =>
  typeof val === "function"
    ? isFnInsideCi(val)
    : Object.values(val).some(
        (val) => typeof val === "function" && isFnInsideCi(val),
      );
export default isInsideCi;
