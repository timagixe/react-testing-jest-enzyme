import checkPropTypes from "check-prop-types";

export const checkProps = (component, props) => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const checkPropsTypesResult = checkPropTypes(component.propTypes, props, "prop", component.name);
    expect(checkPropsTypesResult).toBeUndefined();
};
