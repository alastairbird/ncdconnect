import gql from "graphql-tag";
import {Query} from "react-apollo";
import React from "react";
import Mutation from "react-apollo/Mutation";

class ProfileView extends React.Component {
    state = {
        profile: this.props.existingProfile || {name: ''}
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.existingProfile !== this.props.existingProfile) {
            this.setState({profile: nextProps.existingProfile});
        }
    }

    updateProfile = (key) => (e) => {
        const {profile} = this.state;
        this.setState({profile: {...profile, [key]: e.target.value}});
    }

    render() {
        const {onSubmit, loading, error} = this.props;
        const {profile} = this.state;
        return (
            <div>
                <h1>Profile</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit({profile});
                }}>
                    <label>Name: </label>
                    <input type="text" value={profile.name} onChange={this.updateProfile('name')}/>

                    <button type="submit">Update your profile</button>
                </form>
                {loading && <p>Loading...</p>}
                {error && <p>Error :( Please try again</p>}
            </div>
        )
    }
}


const PROFILE_PAGE_QUERY = gql`
query ProfilePageQuery($id:ID!) {
  getProfileById(id:$id) {
    id
    name
  }
}
`;

const UPDATE_PROFILE = gql`
mutation UpdateProfile($updateProfileInput: UpdateProfileInput!) {
  updateProfile(updateProfileInput: $updateProfileInput) {
    updatedProfile {
      id
      name
    }
  }
}
`;

export const Profile = ({auth}) =>
    <Query query={PROFILE_PAGE_QUERY} variables={{id: auth.userId}}>
        {({loading: queryLoading, error: queryError, data}) => (
            <Mutation mutation={UPDATE_PROFILE}>
                {(updateProfile, {loading: mutationLoading, error: mutationError}) => (
                    <ProfileView
                        existingProfile={data.getProfileById}
                        onSubmit={({profile}) => updateProfile({
                            variables: {
                                updateProfileInput: {
                                    id: auth.userId,
                                    update: {name: profile.name}
                                }
                            }
                        })}
                        loading={mutationLoading || queryLoading}
                        error={mutationError || queryError}
                    />
                )}
            </Mutation>
        )
        }
    </Query>;
