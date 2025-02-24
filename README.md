# React Router Dom v6: Handling Invalid Routes

This repository demonstrates a common issue and its solution when working with React Router Dom v6:  handling cases where a user attempts to navigate to a route that doesn't exist.  This can lead to unexpected behavior or silent failures.  The provided solution shows how to gracefully manage these situations using the `useLocation` hook or other strategies.

## Problem

The problem occurs because of mismatched paths or typos in the `Link` components.  React Router doesn't automatically display an error message. This can confuse users who find themselves stuck on a broken link.