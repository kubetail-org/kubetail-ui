#!/bin/bash

# Check if a version number was provided as an argument
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <new-version>"
    exit 1
fi

# Assign the new version number from command line arguments
NEW_VERSION=$1

# Path to the local package.json file
PACKAGE_JSON="./package.json"

# Check if the local package.json file exists
if [ ! -f "$PACKAGE_JSON" ]; then
    echo "Error: No package.json file found in the current directory."
    exit 1
fi

# Update the version in the local package.json file
echo "Updating version in $PACKAGE_JSON to $NEW_VERSION"
# Portable handling of in-place editing with sed
sed -i.bak -E "s/\"version\": \".*\"/\"version\": \"$NEW_VERSION\"/" "$PACKAGE_JSON" && rm "$PACKAGE_JSON.bak"

echo "Version update completed."
