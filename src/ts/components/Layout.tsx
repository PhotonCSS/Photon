import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";

/* ****************************************** */

export function Container({ children, className, ...props }: InferProps<typeof Container.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("container", className);
	return <div className={classes} {...props}>{ children }</div>;
}

Container.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
};

Container.defaultProps = {
	children: null
};

/* ****************************************** */

export function Row({ children, className, ...props }: InferProps<typeof Row.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("row", className);
	return <div className={classes} {...props}>{ children }</div>;
}

Row.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
};

Row.defaultProps = {
	children: null
};

/* ****************************************** */

export function Col({ children, sm, md, lg, xl, className, ...props }: InferProps<typeof Col.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("col", sm && `s${sm}`, `m${md}`, `l${lg}`, `xl${xl}`, className);
	return <div className={classes} {...props}>{ children }</div>;
}

Col.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	sm: PropTypes.number,
	md: PropTypes.number,
	lg: PropTypes.number,
	xl: PropTypes.number
};

Col.defaultProps = {
	children: null,
	sm: 12
};

/* ****************************************** */

export function VHCenter({ children, className, ...props }: InferProps<typeof VHCenter.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("vh-center", className);
	return <div className={classes} {...props}>{ children }</div>;
}

VHCenter.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
};

VHCenter.defaultProps = {
	children: null
};
