/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<7deb249c1f48b89d621c20063d73ef87>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type ResolverTest3Query$variables = {||};
export type ResolverTest3Query$data = {|
  +me: ?{|
    +client_edge: ?{|
      +__typename: string,
    |},
  |},
|};
export type ResolverTest3Query = {|
  response: ResolverTest3Query$data,
  variables: ResolverTest3Query$variables,
|};
*/

var node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": {
      "hasClientEdges": true
    },
    "name": "ResolverTest3Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "kind": "ClientEdgeToServerObject",
            "operation": require('./ClientEdgeQuery_ResolverTest3Query_me__client_edge.graphql'),
            "backingField": {
              "alias": null,
              "args": null,
              "fragment": {
                "args": null,
                "kind": "FragmentSpread",
                "name": "UserClientEdgeResolver"
              },
              "kind": "RelayResolver",
              "name": "client_edge",
              "resolverModule": require('./../UserClientEdgeResolver.js'),
              "path": "me.client_edge"
            },
            "linkedField": {
              "alias": null,
              "args": null,
              "concreteType": "User",
              "kind": "LinkedField",
              "name": "client_edge",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ResolverTest3Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "38e50d351a7b6bded015fe883e7be216",
    "id": null,
    "metadata": {},
    "name": "ResolverTest3Query",
    "operationKind": "query",
    "text": "query ResolverTest3Query {\n  me {\n    ...UserClientEdgeResolver\n    id\n  }\n}\n\nfragment UserClientEdgeResolver on User {\n  name\n}\n"
  }
};

if (__DEV__) {
  (node/*: any*/).hash = "23af1732ca2b8848723c3de2d3c7231e";
}

module.exports = ((node/*: any*/)/*: Query<
  ResolverTest3Query$variables,
  ResolverTest3Query$data,
>*/);
