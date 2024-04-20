import React from 'react';

function TeamMember({ member }) {
    return (
        <div className="team-member">
            <img src={member.avatar} alt={member.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            <h3>{member.name}</h3>
        </div>
    );
}

export default TeamMember;
